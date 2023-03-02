import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Report = () => {
    const { register, handleSubmit } = useForm();
    const { auth } = useContext(AuthContext)
    const email = auth?.currentUser?.email
    const [reports, setReports] = useState([])
    console.log(reports)
    const imageHostKey = process.env.REACT_APP_imagebb_host_key;
    const [refetch, setRefetch] = useState({})


    const onSubmit = data => {
        const test = data.test;
        const image = data.Report[0]

        const formData = new FormData();
        formData.append("image", image);

        fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {

                const patientInfo = {
                    test,
                    email,
                    image: data.data.url
                }
                fetch(`http://localhost:5000/reports`, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(patientInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        toast.success('Report upload successfull.')
                        setRefetch(data)
                    })


            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    useEffect(() => {
        const url = `http://localhost:5000/reports?email=${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setReports(data))
    }, [refetch])


    return (
        <div>
            <div>
                <h3 className='text-3xl text-cyan-400 m-2'>Test Report</h3>
                <form onSubmit={handleSubmit(onSubmit)} className='p-3 grid md:grid-cols-3 gap-5'>
                    <input {...register("test", { requred: "please provide test name" })} type="text" placeholder="Test name" className="input input-bordered w-full max-w-xs" />
                    <input {...register('Report', { required: true })} type="file" className="file-input file-input-bordered file-input-accent w-full max-w-xs" />
                    <input className='text-start btn btn-outline btn-accent w-2/4' type="submit" />
                </form>

                <div className='grid md:grid-cols-3 gap-5'>
                    {
                        reports.map((report, i) => <div className="card w-58 bg-base-100 shadow-xl"
                            key={i}
                        >
                            <figure className="px-10 pt-10">
                                <img src={report.image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <p className='text-sm text-center uppercase py-3'>{report.test}</p>

                        </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Report;