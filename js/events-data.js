// Events Data - Extracted from document
const eventsData = {
    techfest: {
        name: "RIT TECHFEST '26",
        tagline: "Innovation • Technology • Excellence",
        dates: ["7th April 2026", "10th April 2026", "11th April 2026"],
        college: "Ramaiah Institute of Technology"
    },
    events: [
        {
            id: 1,
            name: "Eco Brick & Filter Challenge 2026",
            department: "Civil Engineering",
            date: "10th April 2026",
            time: "9:30 AM - 1:00 PM",
            venue: "Infront of ESB Board Room (4th Floor)",
            team_size: "2-3 members",
            prize_pool: "₹10,000",
            prize_breakdown: "🥇 ₹5,000 | 🥈 ₹3,000 | 🥉 ₹2,000",
            description: "Step into sustainability and innovation by transforming waste into useful construction materials. Open to all students, engineers and architects!",
            rounds_or_sections: [
                "Create eco-friendly bricks using dry waste materials",
                "Design sustainable construction solutions",
                "Showcase innovation in environmental engineering"
            ],
            registration_link: "https://forms.gle/VCcjNnL6yPZAonBz5",
            whatsapp_group: "https://chat.whatsapp.com/JJCyZx6BAuKC6GdXSArrJq",
            contact_numbers: [
                { name: "Sampath", phone: "9052523344" },
                { name: "Poorvika", phone: "9632827927" }
            ],
            poster_image_path: "images/posters/poster_1.png"
        },
        {
            id: 2,
            name: "Build Battle 2026",
            department: "Civil Engineering",
            date: "10th April 2026",
            time: "2:00 PM - 4:30 PM",
            venue: "Infront of ESB Board Room (4th Floor)",
            team_size: "2-4 members",
            prize_pool: "₹10,000",
            prize_breakdown: "🥇 ₹5,000 | 🥈 ₹3,000 | 🥉 ₹2,000",
            description: "Get ready to test your creativity, engineering skills, and teamwork by building strong and innovative structures under pressure. Open to all students, engineers and architects!",
            rounds_or_sections: [
                "Design and construct towers and bridges using limited materials",
                "Compete in multiple rounds like tower building, bridge construction, and load testing",
                "Apply real-time problem-solving and structural concepts"
            ],
            registration_link: "https://forms.gle/gNaMGTYFPXSyMPmr7",
            whatsapp_group: "https://chat.whatsapp.com/EGq5UOMmoiH0GQWVBZXoIc",
            contact_numbers: [
                { name: "Sampath", phone: "9052523344" },
                { name: "Poorvika", phone: "9632827927" }
            ],
            poster_image_path: "images/posters/poster_2.png"
        },
        {
            id: 3,
            name: "Code → Train → Dominate & Hidden Exit",
            department: "AI & Machine Learning",
            date: "10th April 2026",
            time: "9:00 AM - 4:30 PM",
            venue: "AB703 AIML Lab",
            team_size: "1-3 members",
            prize_pool: "₹10,000",
            description: "Gear up for a double-header of AI challenges and logic-driven debugging! Join the Department of AI & ML for an action-packed day of coding and competition.",
            rounds_or_sections: [
                {
                    name: "CODE → TRAIN → DOMINATE",
                    time: "9:00 AM – 1:00 PM",
                    description: "Put your machine learning skills to the test in this high-intensity modeling challenge. Participants must build and train a model to solve a real-world dataset problem with maximum precision."
                },
                {
                    name: "HIDDEN EXIT",
                    time: "1:30 PM – 4:30 PM",
                    description: "Step into a digital escape room where your debugging skills are the only way out. Navigate through three levels of shattered code and cryptic system logs."
                }
            ],
            registration_link: "https://docs.google.com/forms/d/e/1FAIpQLSfp4CpMTn89NebxHyponzC19MTPSIVzZSSwewBipK-2znBwUg/viewform",
            whatsapp_group: null,
            contact_numbers: [
                { name: "Prarthan", phone: "7619425306" },
                { name: "Omkar", phone: "9980819172" }
            ],
            poster_image_path: "images/posters/poster_3.png"
        },
        {
            id: 4,
            name: "AI Jack of All Trades",
            department: "CSE (AI&ML)",
            date: "10th April 2026",
            time: "9:00 AM onwards",
            venue: "CRD 405",
            team_size: "2-3 members (First Years Only)",
            prize_pool: "₹10,000",
            description: "This event is built for first years. No code. No prior experience. No gatekeeping. Use AI to chart your course and build your concept. A massive twist you won't see coming awaits!",
            rounds_or_sections: [
                "AI-assisted concept building phase",
                "Surprise twist challenge",
                "Final presentation"
            ],
            registration_link: "https://forms.gle/XaXefzjjxmpX26KJ8",
            whatsapp_group: null,
            contact_numbers: [
                { name: "Vishwas", phone: "+91 79962 21355" },
                { name: "Shashank", phone: "+91 93713 42742" }
            ],
            poster_image_path: "images/posters/poster_4.png"
        },
        {
            id: 5,
            name: "The Ultimate Founders Forum - Episode 2",
            department: "Entrepreneurship",
            date: "7th April 2026",
            time: "3:35 PM",
            venue: "TBD",
            team_size: "Individual/Team",
            prize_pool: "Workshop Event",
            description: "Phase 2 is about the reality of the 'galla.' We're going into the engine room to talk about the only thing that keeps a startup alive: Cash flow.",
            rounds_or_sections: [
                "Unit economics deep dive",
                "Cash flow management",
                "Startup survival strategies"
            ],
            registration_link: "https://tuff-mauve.vercel.app/",
            whatsapp_group: "https://chat.whatsapp.com/DqVaX9Db8b4HgRCxyUM4Q2",
            contact_numbers: [],
            poster_image_path: "images/posters/poster_5.png"
        },
        {
            id: 6,
            name: "Agentathon 2026",
            department: "AI & Data Science",
            date: "10th April 2026",
            time: "1:00 PM - 4:30 PM",
            venue: "AI & DS Lab AB705, Apex Block",
            team_size: "3-4 members",
            prize_pool: "₹10,000",
            prize_breakdown: "🥇 ₹5,000 | 🥈 ₹3,000 | 🥉 ₹2,000",
            description: "Get ready to gain hands-on experience by building AI multi-agent systems that collaborate to solve real-world problems.",
            rounds_or_sections: [
                "Build intelligent multi-agent systems using frameworks like LangChain, Google ADK, etc.",
                "Work on real-world domains (Fintech, Healthcare, Agriculture, Education)"
            ],
            registration_link: null,
            whatsapp_group: null,
            contact_numbers: [],
            poster_image_path: "images/posters/poster_6.png"
        },
        {
            id: 7,
            name: "UPAKARAN - Blackbox & Lab Heist",
            department: "Electronics & Instrumentation",
            date: "10th April 2026",
            time: "9:30 AM - 2:00 PM",
            venue: "EIE Dept (DES 5th Floor) & LHC 501",
            team_size: "2-4 members",
            prize_pool: "₹10,000 per event",
            prize_breakdown: "1st – ₹5000 | 2nd – ₹3000 | 3rd – ₹2000",
            description: "Get ready for a perfect blend of hardware + software challenges. Two exciting events designed to test your logic!",
            rounds_or_sections: [
                {
                    name: "BLACKBOX",
                    tagline: "You can't see inside, but you MUST figure it out",
                    time: "9:30 AM – 12:00 PM",
                    venue: "EIE Dept, DES 5th Floor",
                    team_size: "2-4 members",
                    description: "A hands-on challenge combining hardware intuition + logical reasoning.",
                    registration_link: "https://forms.gle/DKzCQ1LeGkbq88um9"
                },
                {
                    name: "LAB HEIST – BREAK THE LOCK",
                    tagline: "The blueprint was stolen. The lab is locked.",
                    time: "11:30 AM - 2:00 PM",
                    venue: "LHC 501",
                    team_size: "3-4 members",
                    description: "A fast-paced mix of puzzles, logic challenges, and problem-solving — a MYSTERY ROOM LIKE NEVER BEFORE",
                    registration_link: "https://forms.gle/sjLYNWp1fQkVN5dQA"
                }
            ],
            registration_link: null,
            whatsapp_group: null,
            contact_numbers: [
                { name: "Tejasvi Narayani", phone: "9731493943" },
                { name: "Aakanksha B S", phone: "9036724753" }
            ],
            poster_image_path: "images/posters/poster_7.png"
        },
        {
            id: 8,
            name: "PI in the Sky Quiz",
            department: "Aerospace Engineering",
            date: "11th April 2026",
            time: "12:00 PM - 2:00 PM",
            venue: "ESB 123",
            team_size: "1-2 members",
            prize_pool: "₹10,000",
            description: "The Dept. of Aerospace Engineering presents a PI in the Sky quiz competition! Solve, Compete, and win exciting prizes.",
            rounds_or_sections: null,
            registration_link: null,
            whatsapp_group: null,
            contact_numbers: [],
            poster_image_path: "images/posters/poster_9.png"
        },
        {
            id: 9,
            name: "Water Rocketry Competition",
            department: "Aerospace Engineering",
            date: "10th April 2026",
            time: "2:00 PM - 4:00 PM",
            venue: "RIT Sports Ground",
            team_size: "3-4 members",
            prize_pool: "Up to ₹5,000",
            description: "Build, learn, and compete in this exciting Water Rocketry competition! Become the champion.",
            rounds_or_sections: null,
            registration_link: null,
            whatsapp_group: null,
            contact_numbers: [],
            poster_image_path: "images/posters/poster_10.png"
        },
        {
            id: 10,
            name: "The Final Codon",
            department: "Biotechnology",
            date: "10th April 2026",
            time: "1:00 PM - 4:00 PM",
            venue: "ESB 530",
            team_size: "2-3 members",
            prize_pool: "₹10,000",
            description: "A biological lockdown has been triggered… and only the sharpest minds can escape. CRACK THE CODE. BEAT THE CLOCK. SURVIVE THE LAB.",
            rounds_or_sections: [
                "Genetic clue decoding",
                "Intense puzzle solving",
                "Time-based escape challenge"
            ],
            registration_link: "https://docs.google.com/forms/d/e/1FAIpQLSeDEKqb2XOz8sY6zWiykeVm3auIzz7E_0n0PwdTfHuXk6VTQg/viewform",
            whatsapp_group: null,
            contact_numbers: [
                { name: "Aadhya", phone: "+91 9515852977" },
                { name: "Shivanjali", phone: "+91 8971524647" }
            ],
            poster_image_path: "images/posters/poster_11.png"
        },
        {
            id: 11,
            name: "Hardware Havoc 2026",
            department: "Electronics/Hardware",
            date: "10th April 2026",
            time: "Finals on 10th April",
            venue: "TBD",
            team_size: "3-4 members",
            prize_pool: "₹10,000",
            description: "Ready to build something real? Join our hands-on hardware hackathon and turn your ideas into working prototypes!",
            rounds_or_sections: [
                {
                    name: "Round 1: Idea Screening",
                    deadline: "4th April"
                },
                {
                    name: "Round 2: Finals",
                    date: "10th April"
                }
            ],
            registration_link: "https://forms.gle/p2Pa7jPvE5fyfj6t5",
            whatsapp_group: null,
            contact_numbers: [],
            poster_image_path: "images/posters/poster_12.png"
        },
        {
            id: 12,
            name: "Sensory Overload",
            department: "Biotechnology",
            date: "10th April 2026",
            time: "9:30 AM - 12:30 PM",
            venue: "ESB 529",
            team_size: "3-4 members",
            prize_pool: "₹10,000",
            description: "A health researcher's sensory data has been corrupted, and you are the recovery agents. PERCEIVE. ADAPT. OVERCOME.",
            rounds_or_sections: [
                "Multi-round sensory challenges",
                "Each round tests a different sense",
                "Twist: Sense advantages removed in each round"
            ],
            registration_link: "https://forms.gle/1XsQZFLgEF8V3bEN6",
            whatsapp_group: null,
            contact_numbers: [
                { name: "Nandhini", phone: "9480220918" },
                { name: "Muskan", phone: "9036949184" }
            ],
            poster_image_path: "images/posters/poster_13.png"
        },
        {
            id: 13,
            name: "ThinkAI: The AI Arena",
            department: "Computer Science",
            date: "10th April 2026",
            time: "9:00 AM onwards",
            venue: "CSE Lab II",
            team_size: "2-4 members",
            prize_pool: "₹10,000",
            description: "This isn't about speed. This is a hackathon where coding meets smart thinking. Only solutions that think differently make it to the final stage.",
            rounds_or_sections: [
                "Problem understanding phase",
                "AI/ML solution building",
                "Solution presentation and evaluation"
            ],
            registration_link: "https://forms.gle/3LT2Gr7oDcvYTtge6",
            whatsapp_group: null,
            contact_numbers: [
                { name: "Md Adnan", phone: "+91 895 127 5863" },
                { name: "Azhar Begh", phone: "+91 600 565 9582" }
            ],
            poster_image_path: "images/posters/poster_14.png"
        },
        {
            id: 14,
            name: "InnovateX Ideathon 2026",
            department: "Computer Science",
            date: "10th April 2026",
            time: "9:30 AM onwards",
            venue: "CSE Lab I",
            team_size: "2-4 members",
            prize_pool: "₹10,000",
            description: "This isn't about coding. It's about your idea. Build it. Shape it. Defend it. Only the ones that stand out make it to the final stage.",
            rounds_or_sections: [
                "Develop your idea",
                "Submit your concept",
                "Present and defend"
            ],
            registration_link: "https://forms.gle/dWAbCxQQFXk6X3hM6",
            whatsapp_group: null,
            contact_numbers: [
                { name: "Syed Md Zuber", phone: "+91 9108332806" },
                { name: "Keerthana SDS", phone: "+91 83414 81853" }
            ],
            poster_image_path: "images/posters/poster_15.png"
        },
        {
            id: 15,
            name: "Neural Joystick",
            department: "Electrical and Electronics Engineering",
            date: "10th April 2026",
            time: "9:30 AM - 12:30 PM",
            venue: "DES 113, Basement Computer Lab",
            team_size: "1-2 members",
            prize_pool: "₹10,000",
            prize_breakdown: "🥇 ₹5,000 | 🥈 ₹3,000 | 🥉 ₹2,000",
            description: "Ditch scrolling, start building! Create a game using AI and show off your creativity to win exciting prizes. Can your game spike our dopamine?",
            rounds_or_sections: [
                "Build AI-powered games",
                "Transform ideas into playable prototypes",
                "Showcase your creative game concepts"
            ],
            registration_link: "https://forms.gle/m2JJGa4VBBGP2xJ26",
            whatsapp_group: null,
            contact_numbers: [
                { name: "Shreeniketh", phone: "7483357391" },
                { name: "Vishwas CM", phone: "8310098445" }
            ],
            poster_image_path: "images/posters/poster_16.png"
        },
        {
            id: 16,
            name: "Hold The Floor",
            department: "Electrical and Electronics Engineering",
            date: "10th April 2026",
            time: "1:30 PM - 3:30 PM",
            venue: "Room 201, LHC, RIT",
            team_size: "1 member",
            prize_pool: "₹10,000",
            prize_breakdown: "🥇 ₹5,000 | 🥈 ₹3,000 | 🥉 ₹2,000",
            description: "Speak Bold, Think Sharp. From Thought to Thread: Weaving Intelligence into Words. Take the Mic, Take Home the Prize. All participants receive E-certificate.",
            rounds_or_sections: [
                "Round 1: Technical Quiz",
                "Round 2: Speech Round"
            ],
            registration_link: "https://forms.gle/9FHKy3XRgug819gv7",
            whatsapp_group: null,
            contact_numbers: [
                { name: "Sri Krishna KG", phone: "6362171039" },
                { name: "Rajat AN", phone: "8431002631" }
            ],
            poster_image_path: "images/posters/poster_17.png"
        },
        {
            id: 17,
            name: "WITLOCK: A Trace Remains",
            department: "CSE (AI&ML)",
            date: "10th April 2026",
            time: "1:45 PM - 5:00 PM",
            venue: "CRD 405",
            team_size: "2-4 members",
            prize_pool: "₹10,000",
            prize_breakdown: "🥇 ₹5,000 | 🥈 ₹3,000 | 🥉 ₹2,000",
            description: "Step into a story-driven cybersecurity investigation where nothing is as it seems. Answers won't come easy. What you see may not be real. Attention changes everything. Keep going. Every detail matters. Nothing is accidental.",
            rounds_or_sections: [
                "Follow digital clues and evidence",
                "Decode hidden messages and ciphers",
                "Uncover the truth behind the mystery"
            ],
            registration_link: "https://docs.google.com/forms/d/e/1FAIpQLSe_w7HoF84mJHG9tLNTf-Z8MTtwKodSiI13xNU8qs9u8XlNMg/viewform",
            whatsapp_group: null,
            contact_numbers: [
                { name: "Surabi G M", phone: "6364509898" },
                { name: "Dr. Sini Anna Alex", phone: "9901287316" },
                { name: "Dr. Rakesh Kalshetty", phone: "9731202250" }
            ],
            poster_image_path: "images/posters/poster_18.png"
        }
    ]
};
