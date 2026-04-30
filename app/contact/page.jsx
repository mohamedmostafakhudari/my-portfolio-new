import Form from "@/components/contact/Form";
import SocialMedia from "@/components/homepage/SocialMedia";

const ContactPage = () => {
	return (
		<div className="grid grid-cols-1 gap-2 px-4 md:grid-cols-2">
			<div className="flex flex-col gap-6">
				<h1 className="text-4xl">Get in Touch</h1>
				<p>
					Have a project in mind, an opportunity, or just want to connect? I’m
					always open to discussing freelance work, collaborations, and new
					ideas.
				</p>
				<div className="flex items-center mt-3 w-full max-w-72">
					<SocialMedia />
				</div>
			</div>
			<div>
				<Form />
			</div>
		</div>
	);
};

export default ContactPage;
