import { useForm, ValidationError } from '@formspree/react';

{/* Components */}
import Button from './ui/Button';

export default function ContactForm() {
    const [state, handleSubmit] = useForm("mnnqpvpk");

    if (state.succeeded) {
        return (
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">Thank you for contacting me!</h2>
            </div>
        )
    }

    return (
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">Message Me</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">Full Name</label>
                    <input
                        type="text"
                        id="full-name"
                        name="name"
                        className="block w-full p-2.5 shadow-sm-light bg-gray-800 border border-gray-700 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500"
                        placeholder="What can I call you?" required />
                    <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="block w-full p-2.5 shadow-sm-light bg-gray-800 border border-gray-700 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500"
                        placeholder="example@email.com" required />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="block p-2.5 w-full text-sm bg-gray-800 rounded-lg border border-gray-700 shadow-sm-light focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Let me know how I can help you" required />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="block p-2.5 w-full text-sm bg-gray-800 rounded-lg shadow-sm-light border border-gray-700 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Leave your message here"></textarea>
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </div>
                <Button type="submit" disabled={state.submitting}>
                    Send Message
                </Button>
            </form>
        </div>
    );
}