"use client";

import { Button } from "@/components/ui/button";
import {
	Field,
	FieldDescription,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const initialData = {
	name: "",
	email: "",
	message: "",
};

export default function Form() {
	const [data, setData] = useState(initialData);

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch("/api/contact", { method: "POST", body: JSON.stringify(data) });
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setData({
			...data,
			[name]: value,
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<FieldGroup>
				<Field>
					<FieldLabel htmlFor="name">Name</FieldLabel>
					<Input
						id="name"
						name="name"
						placeholder="Jordan Lee"
						value={data.name}
						onChange={handleChange}
					/>
				</Field>
				<Field>
					<FieldLabel htmlFor="email">Email</FieldLabel>
					<Input
						id="email"
						name="email"
						type="email"
						placeholder="name@example.com"
						value={data.email}
						onChange={handleChange}
					/>
				</Field>
				<Field>
					<FieldLabel htmlFor="textarea-message">Message</FieldLabel>
					<FieldDescription>Enter your message below.</FieldDescription>
					<Textarea
						id="message"
						name="message"
						placeholder="Type your message here."
						value={data.message}
						onChange={handleChange}
					/>
				</Field>
				<Field orientation="horizontal">
					<Button
						type="submit"
						className={"w-full"}
					>
						Send
					</Button>
				</Field>
			</FieldGroup>
		</form>
	);
}
