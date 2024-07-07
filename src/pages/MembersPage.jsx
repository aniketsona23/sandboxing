import React from "react";
import { student, faculty } from "../utils/member";
import MembersCard from "../Components/MembersCard";
import "../styles/members-page.css";

export default function MembersPage() {
  return (
    <section className="members-page">
      <h1>Members</h1>
      <div className="members">
        {student.map((element, i) => {
          return (
            <MembersCard
              key={i}
              name={element.name}
              image={element.image}
              linkedin={element.linkedIn}
              mail={element.email}
            />
          );
        })}
      </div>
      <h1>Faculty</h1>
      <div className="faculty">
        {faculty.map((element,i)=>{
          return(
            <MembersCard key={i} name={element.name} image={element.image} mail={element.email}  />)
        })}
      </div>
    </section>
  );
}
