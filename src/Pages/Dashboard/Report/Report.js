import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const Report = () => {
    const { register, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imagebb_host_key;


    const onSubmit = data => {
        const test = data.test;
        const image = data.report[0]

        const formData = new FormData();
        formData.append("image", image);

        fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                
                const patientInfo = {
                    test: test,
                    image: data.data.url
                }
                fetch(`http://localhost:5000/report`, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(patientInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        toast.success('Report upload successfull.')
                    })


            })
            .catch((error) => {
                console.error("Error:", error);
            });




    }

    return (
        <div>
            <div>
                <h3 className='text-3xl text-cyan-400 m-2'>Test Report</h3>
                <form onSubmit={handleSubmit(onSubmit)} className='p-3 grid md:grid-cols-3 gap-5'>
                    <input {...register("test",{requred: "please provide test name"})} type="text" placeholder="Test name" className="input input-bordered w-full max-w-xs" />
                    <input {...register('Report', {required: true})} type="file" className="file-input file-input-bordered file-input-accent w-full max-w-xs" />
                    <input className='text-start btn btn-outline btn-accent w-2/4' type="submit" />
                </form>
            </div>

        </div>
    );
};

export default Report;