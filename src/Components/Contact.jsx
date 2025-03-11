import {useForm} from "react-hook-form"
import Input from "./useForm/Input"



const Contact = () => {


    const {
        control, 
        handleSubmit,
        formState:{ errors }
    } =  useForm()

    const onSubmit = (data) =>{
        const myEmail = "mrmy160602@gmail.com"
        const { name, phone, email, message} = data
        const chat = `Nama : ${name}\nNo HP : ${phone}\nEmail : ${email}\n\n${message}`
        const mailtoLink = `mailto:${myEmail}?subject=${encodeURIComponent('Pesan Dari Website Yusuf')}&body=${encodeURIComponent(chat)}`;
        // console.log(mailtoLink);
        window.location = mailtoLink


    }

    return (
        <div className="contact mt-5 mb-5 pt-5" id="contact">
            <div className="container">
                <h2 className="fs-1">Let's Catch Up Over Coffee☕</h2>
                <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        name="name"
                        label="Name"
                        control={control}
                        rules={{required : "Name is Required"}}
                        errors={errors}
                        type="text"
                    />
                    <Input
                        name="phone"
                        label="Phone Number"
                        control={control}
                        rules={{required : "Phone Number is Required"}}
                        errors={errors}
                        type="number"
                    />
                    <Input
                        name="email"
                        label="Email"
                        control={control}
                        rules={{required: "Email is required"}}
                        errors={errors}
                        type="email"
                    />
                    <Input
                        name="message"
                        label="Message"
                        control={control}
                        rules={{required: "Message is required"}}
                        errors={errors}
                        type="text"
                        textarea={true}
                    />

                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
