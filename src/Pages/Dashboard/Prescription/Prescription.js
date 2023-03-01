import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const Prescription = () => {
    const { register, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imagebb_host_key;


    const onSubmit = data => {
        const name = data.name;
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
                    name: name,
                    image: data.data.url
                }
                fetch(`http://localhost:5000/prescription`, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(patientInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        toast.success('upload successfull.')
                    })


            })
            .catch((error) => {
                console.error("Error:", error);
            });




    }



    return (
        <div>
            <h3 className='text-3xl text-cyan-400 m-2'>All Prescriptions</h3>
            <form onSubmit={handleSubmit(onSubmit)} className='p-3 grid md:grid-cols-3 gap-5'>
                <input {...register("name")} type="text" placeholder="patient name" className="input input-bordered w-full max-w-xs" />
                <input {...register('prescription')} type="file" className="file-input file-input-bordered file-input-accent w-full max-w-xs" />
                <input className='text-start btn btn-outline btn-accent w-2/4' type="submit" />
            </form>
        </div>
    );
};

export default Prescription;