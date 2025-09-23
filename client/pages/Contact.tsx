import Layout from "@/components/site/Layout";

export default function Contact() {
  return (
    <Layout>
      <section className="relative bg-[url('/assets/contact-bg.jpg')] bg-cover bg-center">
        <div className="bg-black/40">
          <div className="container mx-auto px-6 py-20 text-white">
            <h1 className="text-4xl font-extrabold">Get in Touch</h1>
            <p className="mt-2 text-white/90">
              Commissions, inquiries, and collaborations welcome
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        <form className="md:col-span-2 bg-white rounded-2xl shadow p-6 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              className="border rounded-lg px-3 py-2"
              placeholder="Name"
              required
            />
            <input
              type="email"
              className="border rounded-lg px-3 py-2"
              placeholder="Email"
              required
            />
          </div>
          <input
            className="border rounded-lg px-3 py-2"
            placeholder="Phone (optional)"
          />
          <select className="border rounded-lg px-3 py-2">
            <option>General Inquiry</option>
            <option>Commission Request</option>
            <option>Purchase Inquiry</option>
            <option>Press/Media</option>
            <option>Exhibition Opportunity</option>
          </select>
          <textarea
            className="border rounded-lg px-3 py-2 h-40"
            placeholder="Message"
            required
          />
          <button className="rounded-full bg-primary text-white px-6 py-3 font-medium">
            Send Message
          </button>
        </form>
        <aside className="bg-secondary/60 rounded-2xl p-6">
          <h3 className="text-xl font-semibold">Contact Information</h3>
          <ul className="mt-3 space-y-2 text-foreground/80">
            <li>
              Email:{" "}
              <a className="underline" href="mailto:dherma6969@gmail.com">
                dherma6969@gmail.com
              </a>
            </li>
            <li>Response: 24-48 hours</li>
          </ul>
        </aside>
      </section>
    </Layout>
  );
}
