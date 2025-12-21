import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Linkedin, Github, Twitter, Instagram } from "lucide-react";
import { Card, CardContent } from "../ui/Card";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const serviceId = "service_7tcjbeh";
      const templateId = "template_4afc6kt";
      const publicKey = "7OmCKsEjJB7XIofC6";
      const recipientEmail = "bmahajan1802@gmail.com";

      // Use emailjs.send with explicit parameters
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: recipientEmail,
          to_name: "Bhushan Mahajan",
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          message: formData.message,

          user_email: recipientEmail,
          recipient_email: recipientEmail,
        },
        publicKey
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
      const errorText = error.text || error.message || "";
      if (errorText.includes("recipients address is empty") || errorText.includes("422")) {
        setErrorMessage(
          "EmailJS template not configured. Please set 'To Email' field in your EmailJS template to: bmahajan1802@gmail.com or use {{to_email}} variable."
        );
      } else {
        setErrorMessage(
          errorText || "Failed to send message. Please try again."
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { icon: Mail, href: "mailto:bhushanpmahajan1137@gmail.com", label: "Email" },
    { icon: Linkedin, href: "www.linkedin.com/in/bhushan-mahajan-1137-bpm8435", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/Bhushan1137/", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/BMAHAJAN1137", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/bhushan.mahajan.1137/", label: "Instagram" },
  ];

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex h-full"
            >
              <Card className="w-full h-full flex flex-col">
                <CardContent className="pt-6 flex-1 flex flex-col">
                  <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                    {submitStatus === "success" && (
                      <p className="text-sm text-green-600 dark:text-green-400">
                        Message sent successfully!
                      </p>
                    )}
                    {submitStatus === "error" && (
                      <p className="text-sm text-red-600 dark:text-red-400">
                        {errorMessage || "Failed to send message. Please try again."}
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex h-full"
            >
              <Card className="w-full h-full flex flex-col">
                <CardContent className="pt-6 flex-1 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold mb-4">
                    Connect With Me
                  </h3>
                  <div className="space-y-3">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, x: 5 }}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors"
                        >
                          <Icon className="h-5 w-5" />
                          <span>{social.label}</span>
                        </motion.a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
