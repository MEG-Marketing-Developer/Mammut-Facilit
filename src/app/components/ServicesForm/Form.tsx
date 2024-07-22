// components/ContactForm.tsx
import { useState, ChangeEvent, FormEvent } from "react";
import Button from "../Ui/Button";

interface FormData {
  name: string;
  email: string;
  option: string;
}

const ServicesForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    option: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Submit");
  };

  // async (e: FormEvent) => {
  //   e.preventDefault();
  //   setError(null);
  //   setSuccess(null);

  //   try {
  //     const res = await fetch('/api/send-email', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(formData)
  //     });

  //     if (!res.ok) {
  //       throw new Error('Network response was not ok');
  //     }

  //     const result = await res.json();
  //     if (result.status === 'Email sent') {
  //       setSuccess('Email sent successfully!');
  //     } else {
  //       setError(result.error || 'Error sending email');
  //     }
  //   } catch (error: unknown) {
  //     if (error instanceof Error) {
  //       setError(error.message);
  //     } else {
  //       setError('An unknown error occurred');
  //     }
  //   }
  // };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-left space-y-6"
    >
      <input
        placeholder="Your Name"
        className="text-xl border-2 border-[#EAECF1] bg-[#F6F7FA] text-[#0D1427] px-[24px] py-[15px] rounded"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        placeholder="Your Email"
        className="text-xl border-2 border-[#EAECF1] bg-[#F6F7FA] text-[#0D1427] px-[24px] py-[15px] rounded"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <select
        name="option"
        className="text-xl border-2 border-[#EAECF1] bg-[#F6F7FA] text-[#0D1427] px-[24px] py-[15px] rounded"
        value={formData.option}
        onChange={handleChange}
        required
      >
        <option value="" disabled>
          What Type Your Question?
        </option>
        <option value="Cleaning">Cleaning</option>
        <option value="Maintaining">Maintaining</option>
      </select>
      <Button
        type="submit"
        className=" text-white text-center mt-10 py-4 px-8 text-lg rounded-lg font-medium dark-button-animation"
      >
        Get Started
      </Button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </form>
  );
};

export default ServicesForm;
