from fpdf import FPDF


OUTPUT_PATH = "Isaac_Ajibola_CV_2026_Project_Based.pdf"


class CVPDF(FPDF):
    def header(self):
        pass

    def section_title(self, title: str):
        self.set_font("Helvetica", "B", 12)
        self.set_text_color(20, 20, 20)
        self.cell(0, 8, title.upper(), new_x="LMARGIN", new_y="NEXT")
        self.set_draw_color(60, 60, 60)
        self.line(self.l_margin, self.get_y(), self.w - self.r_margin, self.get_y())
        self.ln(3)

    def body_text(self, text: str, indent: int = 0):
        self.set_x(self.l_margin + indent)
        self.set_font("Helvetica", "", 10)
        self.set_text_color(35, 35, 35)
        self.multi_cell(self.epw - indent, 5.3, text)

    def bullet(self, text: str, indent: int = 0):
        self.set_x(self.l_margin + indent)
        self.set_font("Helvetica", "", 10)
        self.set_text_color(35, 35, 35)
        self.multi_cell(self.epw - indent, 5.3, f"- {text}")


def build_pdf():
    pdf = CVPDF()
    pdf.set_auto_page_break(auto=True, margin=15)
    pdf.add_page()
    pdf.set_margins(left=15, top=15, right=15)

    # Personal details
    pdf.set_font("Helvetica", "B", 18)
    pdf.cell(0, 8, "Isaac Olalekan Ajibola", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "", 11)
    pdf.cell(0, 6, "Full-Stack Software Engineer", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "", 10)
    pdf.multi_cell(
        pdf.epw,
        5.3,
        "Email: olalekanisaac75@gmail.com | Portfolio: bigizic.github.io | LinkedIn: linkedin.com/in/isaac-ajibola",
    )
    pdf.ln(2)

    # Professional summary
    pdf.section_title("Professional Summary")
    pdf.body_text(
        "Project-based Full-Stack Software Engineer with proven delivery across e-commerce, "
        "booking, and event platforms from architecture to deployment. I build secure, scalable "
        "web systems with strong backend engineering, payment integration, and automation focus. "
        "I have delivered production-ready solutions on tight timelines, including platforms that "
        "support real transactions, customer workflows, and operational efficiency."
    )
    pdf.ln(1)

    # Key competencies
    pdf.section_title("Key Competencies")
    competencies = [
        "Backend Engineering: Node.js, Express.js, Python, C#, REST API design",
        "Frontend Engineering: React, Next.js, TypeScript, Redux, Tailwind CSS",
        "Databases & Caching: MongoDB, MySQL, Redis, SQL performance optimization",
        "Payments & Integrations: Paystack, email systems, verification workflows",
        "Platform Delivery: Authentication, CMS/admin tools, booking and ticketing systems",
        "Quality & Collaboration: Unit testing, agile delivery, cross-functional teamwork",
    ]
    for item in competencies:
        pdf.bullet(item)
    pdf.ln(1)

    # Work experience / projects
    pdf.section_title("Selected Projects and Delivery Experience")

    projects = [
        {
            "name": "BB Glow'd Natural E-commerce Platform",
            "meta": "Full-Stack Developer | Nov 2025 | Remote Contract",
            "details": [
                "Developed a full MERN + Next.js e-commerce application for a beauty brand.",
                "Built a responsive frontend with Next.js, TypeScript, React, Redux, and Tailwind CSS.",
                "Delivered a custom CMS admin panel for product and order management.",
                "Integrated Paystack payments and secure authentication with email verification.",
                "Result: Launched a production-ready digital sales platform with improved online order handling.",
            ],
        },
        {
            "name": "The Link Hangouts Event Ticketing and Commerce System",
            "meta": "Full-Stack Developer | Jun 2025 - Jul 2025 | Remote Contract",
            "details": [
                "Built an end-to-end event management and ticketing platform with e-commerce capabilities.",
                "Implemented event creation, real-time availability tracking, ticket booking, and QR code generation.",
                "Integrated secure checkout, order tracking, and inventory-aware shopping workflows.",
                "Implemented Paystack payments, user authentication, and automated email notifications.",
                "Result: Delivered a unified platform that supports both event operations and merchandise sales.",
            ],
        },
        {
            "name": "Tohanniees Skincare E-commerce and Marketing Automation",
            "meta": "Full-Stack Developer | Nov 2024 - Jan 2025 | Remote Contract",
            "details": [
                "Developed secure backend services with Express.js and MongoDB for API and payment workflows.",
                "Built and integrated an email automation system for marketing and transactional communication.",
                "Delivered campaigns and notifications to over 700 customers/subscribers.",
                "Optimized the application for performance, scalability, and reliable delivery under tight timelines.",
                "Result: Enabled smoother customer purchase flow and stronger digital marketing operations.",
            ],
        },
        {
            "name": "Tohanniees Beauty Booking Platform",
            "meta": "Full-Stack Developer | Sep 2025 - Oct 2025 | Remote Contract",
            "details": [
                "Built a customer booking application with real-time availability and appointment management.",
                "Implemented scheduling workflows, confirmation emails, reminders, and rescheduling support.",
                "Designed a streamlined and mobile-friendly booking experience for service customers.",
                "Result: Improved service scheduling efficiency and customer self-service booking.",
            ],
        },
        {
            "name": "Noks Technologies Web Applications and API Delivery",
            "meta": "Junior Software Engineer | Jan 2025 - Mar 2025 | Lagos, Nigeria",
            "details": [
                "Built and maintained web applications using C#, React, jQuery, and SQL.",
                "Developed RESTful APIs with .NET and wrote efficient SQL queries for data operations.",
                "Result: Supported dependable internal application functionality and data handling workflows.",
            ],
        },
        {
            "name": "ALX Africa Backend Engineering Internship",
            "meta": "Backend Developer Intern | Oct 2023 - Mar 2024 | Remote",
            "details": [
                "Developed and maintained backend systems using Python and JavaScript.",
                "Implemented caching and queuing to improve performance and scalability.",
                "Created unit tests and collaborated in team-based software delivery.",
                "Result: Strengthened engineering fundamentals in scalable backend architecture and quality practices.",
            ],
        },
    ]

    for project in projects:
        pdf.set_font("Helvetica", "B", 10.5)
        pdf.set_text_color(10, 10, 10)
        pdf.multi_cell(pdf.epw, 5.8, project["name"])
        pdf.set_font("Helvetica", "I", 9.5)
        pdf.set_text_color(60, 60, 60)
        pdf.multi_cell(pdf.epw, 5.0, project["meta"])
        for detail in project["details"]:
            pdf.bullet(detail, indent=2)
        pdf.ln(1)

    # Education
    pdf.section_title("Education")
    pdf.set_font("Helvetica", "B", 10.5)
    pdf.multi_cell(pdf.epw, 5.8, "ALX Africa")
    pdf.set_font("Helvetica", "I", 9.5)
    pdf.multi_cell(pdf.epw, 5.0, "Diploma, Software Engineering | 2023 - 2024")
    pdf.set_font("Helvetica", "", 10)
    pdf.bullet("Training focus: Full-stack web development, AWS system administration, computer programming")
    pdf.bullet("Certificate: savanna.alxafrica.com/certificates/hel9spxfjy")

    pdf.output(OUTPUT_PATH)
    print(f"Generated: {OUTPUT_PATH}")


if __name__ == "__main__":
    build_pdf()
