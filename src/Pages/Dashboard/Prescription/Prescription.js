import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Prescription = () => {
    const { register, handleSubmit } = useForm();
    const { auth } = useContext(AuthContext);
    const imageHostKey = process.env.REACT_APP_imagebb_host_key;
    const [prescriptions, setPrescription] = useState([])
    const email = auth?.currentUser?.email
    const [refetch, setRefetch] = useState({})


    const onSubmit = data => {
        const name = data.name
        const image = data.prescription[0]

        const formData = new FormData();
        formData.append("image", image);

        fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {

                const patientInfo = {
                    name,
                    email,
                    image: data.data.url
                }
                fetch(`https://race-hospital-server.vercel.app/prescription`, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(patientInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        toast.success('upload successfull.')
                        setRefetch(data)
                    })


            })
            .catch((error) => {
                console.error("Error:", error);
            });

    }

    useEffect(() => {
        const url = `https://race-hospital-server.vercel.app/prescription?email=${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPrescription(data))
    }, [refetch])


    return (
        <div>
            <h3 className='text-2xl text-success bold m-2'>All Prescriptions:</h3>
            <form onSubmit={handleSubmit(onSubmit)} className='p-3 grid md:grid-cols-3 gap-5'>
                <input {...register("name", { required: 'please provide patient name' })} type="text" placeholder="patient name" className="input input-bordered w-full max-w-xs" />
                <input {...register('prescription', { required: true })} type="file" className="file-input file-input-bordered file-input-accent w-full max-w-xs" />
                <input className='text-start btn btn-outline btn-accent w-2/4' type="submit" />
            </form>

            <div className='grid md:grid-cols-3 gap-5'>
                {
                    prescriptions.map((prescription, i) => <div className="card w-58 bg-base-100 shadow-xl"
                        key={i}
                    >
                        <figure className="px-10 pt-10">
                            <img src={prescription.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <p className='text-sm text-center uppercase py-3'>{prescription.name}</p>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Prescription;