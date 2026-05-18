import { Button } from "@heroui/react";
import Link from "next/link";
import DocCard from "./DocCard";

const doctors = [
  {
    "id": "d1",
    "name": "Dr. Ayesha Rahman",
    "specialty": "Cardiologist",
    "image": "https://randomuser.me/api/portraits/women/44.jpg",
    "experience": "10 years",
    "availability": ["09:00 AM - 12:00 PM", "04:00 PM - 07:00 PM"],
    "description": "Highly experienced cardiologist specializing in heart diseases, preventive care, and patient-centered treatment.",
    "hospital": "Labaid Cardiac Hospital",
    "location": "Dhanmondi, Dhaka",
    "fee": 800,
    "rating": {
      "score": 4.8,
      "totalReviews": 124
    }
  },
  {
    "id": "d2",
    "name": "Dr. Tanvir Ahmed",
    "specialty": "Pediatrician",
    "image": "https://randomuser.me/api/portraits/men/32.jpg",
    "experience": "8 years",
    "availability": ["10:00 AM - 01:00 PM", "06:00 PM - 09:00 PM"],
    "description": "Dedicated pediatrician focused on comprehensive child care, immunizations, and developmental milestones.",
    "hospital": "Square Hospitals Ltd.",
    "location": "Panthapath, Dhaka",
    "fee": 700,
    "rating": {
      "score": 4.9,
      "totalReviews": 98
    }
  },
  {
    "id": "d3",
    "name": "Dr. Nusrat Jahan",
    "specialty": "Dermatologist",
    "image": "https://randomuser.me/api/portraits/women/68.jpg",
    "experience": "12 years",
    "availability": ["11:00 AM - 03:00 PM"],
    "description": "Expert in clinical and cosmetic dermatology, specializing in acne treatments, anti-aging, and skin disorders.",
    "hospital": "Evercare Hospital",
    "location": "Bashundhara, Dhaka",
    "fee": 1000,
    "rating": {
      "score": 4.7,
      "totalReviews": 210
    }
  },
  {
    "id": "d4",
    "name": "Prof. Dr. Asif Iqbal",
    "specialty": "Neurologist",
    "image": "https://randomuser.me/api/portraits/men/75.jpg",
    "experience": "18 years",
    "availability": ["03:00 PM - 06:00 PM", "07:30 PM - 09:30 PM"],
    "description": "Renowned neurologist expert in managing complex neurological disorders, stroke rehabilitation, and chronic migraines.",
    "hospital": "Popular Diagnostic Center",
    "location": "Uttara, Dhaka",
    "fee": 1200,
    "rating": {
      "score": 4.9,
      "totalReviews": 345
    }
  },
  {
    "id": "d5",
    "name": "Dr. Saima Chowdhury",
    "specialty": "Gynecologist",
    "image": "https://randomuser.me/api/portraits/women/52.jpg",
    "experience": "6 years",
    "availability": ["09:30 AM - 01:30 PM"],
    "description": "Compassionate obstetrician and gynecologist specializing in high-risk pregnancies and women's reproductive health.",
    "hospital": "Central Hospital",
    "location": "Green Road, Dhaka",
    "fee": 600,
    "rating": {
      "score": 4.6,
      "totalReviews": 75
    }
  }
]

const TopRated = () => {
    return (
        <div>
            <div className="flex items-end justify-between">
                <div>
            <h1 className="title text-3xl">Top Rated Doctors</h1>
            <p className="text">Trusted specialists ready to assist you.</p>
                </div>
                <Link href={'/appointments'}>
             <Button variant="ghost" className={'primary font-medium text-sm'}>View all doctors</Button>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                {doctors.map(doctor=><DocCard key={doctor.id} doctor={doctor}></DocCard>)}
            </div>

        </div>
    );
};

export default TopRated;