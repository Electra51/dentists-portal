import React from 'react';
import contact from '../../assets/images/appointment.png'

const Contact = () => {
  const handleContact = event => {
    event.preventDefault();
    const form = event.target;
    const subject = form.subject.value;
    const email = form.email.value;
    const message = form.message.value;

    // [3, 4, 5].map((value, i) => console.log(value))
    const contacting = {
      user: message,
      email,
      subject,
    }
    console.log(contacting)


  }

  return (
    <div className="hero mt-20 rounded-md" style={{ background: `url(${contact})` }}>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-5'>
              <p className='text-primary'>Contact Us</p>
              <h1 className='text-3xl text-white'>Stay connected with us</h1>
              <form onSubmit={handleContact} className='grid grid-cols-1 gap-3 mt-10'>
                <input name="email" type="email" placeholder="Email Address" className="input w-full input-bordered" />
                <input name="subject" type="text" placeholder="Subject" className="input w-full input-bordered" />
                <textarea className="textarea textarea-bordered w-full" name="message" placeholder="Your message"></textarea>
                <input className='btn btn-primary w-full text-white' type="submit" value="Submit" />
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;