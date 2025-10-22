import React from "react";
import Link from "next/link";

export default function Resume() {
  return (
    <div className="relative">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-[url('/reflection.JPG')]" />
      <div className="flex bg-orange-50/70 m-10 backdrop-blur-md rounded-2xl px-8 pb-5 flex-col mx-auto items-center w-4/5 md:w-3/5">
        <div className="text-8xl text-green-900">resume</div>
        <div className="justify-start text-xl">
          <h1 className="text-green-800 text-3xl">Education</h1>
          <div className="ml-3 text-xl">
            <div className="flex justify-between">
              <p>
                California Polytechnic State University, College of Engineering
              </p>
              <p>2023-2027</p>
            </div>
            <div className="ml-3 text-sm md:text-xl">
              <p className="italic">
                B.S. Computer Science, Game Development Concentration
              </p>
              <p>GPA: 3.79</p>
            </div>
          </div>
          <h1 className="text-green-800 text-3xl">
            Computer Science Experience
          </h1>
          <div className="ml-3 text-xl">
            <div className="flex justify-between">
              <p>
                Web Developer - <em>Field Studies Club</em>
              </p>
              <p>July 2025-Present</p>
            </div>
            <p className="ml-3 text-sm">
              Building a full-stack website using React and Firebase, with user
              authentication, schedule management, messaging, announcements, and
              outdoor gear management, for Field Studies Club. Collaborating
              with a UX/UI designer in the club to create a coherent and
              pleasing user experience.
            </p>
            <div className="flex justify-between">
              <p>
                Game Developer - <em>Personal Project</em>
              </p>
              <p>September 2025-Present</p>
            </div>
            <p className="ml-3 text-sm">
              Collaborating with an Art & Design Student to develop an original
              2-D role-playing game in Godot, currently in the early prototyping
              stage; learning Godot fundamentals, implementing core gameplay
              mechanics and scripting with GDScript.
            </p>
            <div className="flex justify-between">
              <p>
                Web Developer - <em>Hack4Impact</em>
              </p>
              <p>September 2025-Present</p>
            </div>
            <p className="ml-3 text-sm">
              Work in scrum teams of 10-15 to develop software for local
              non-profits that allows them to more effectively serve their
              communities, such as volunteer management systems or data portals.
            </p>
            <div className="flex justify-between">
              <p className="inline">
                Web Developer - <em>Poly Pups</em>
                <Link
                  className="inline mx-2 text-sm text-green-700 hover:text-amber-600"
                  href="https://witty-pond-00c913f1e.6.azurestaticapps.net/"
                >
                  (visit)
                </Link>
              </p>
              <p>Spring 2025</p>
            </div>
            <p className="ml-3 text-sm">
              Worked in a student scrum team to develop a full-stack scheduling
              website for Poly Puppy Raisers using React, MongoDB, and
              Express.js.
            </p>
          </div>
          <h1 className="text-green-800 text-3xl">Coursework</h1>
          <div className="ml-3 text-xl">
            <p>Intro to Software Engineering</p>
            <p className="ml-3 text-sm">
              Worked in an Agile scrum team, using React, Express.js, and
              MongoDB to build a full-stack scheduling website for a student
              organization.
            </p>
            <p>Systems Programming</p>
            <p className="ml-3 text-sm">
              Used C/C++ to implement compression & decompression programs,
              parallel processing, signals & pipes, shared memory, and other
              fundamental systems concepts.
            </p>
            <p>Algorithms</p>
            <p className="ml-3 text-sm">
              Applied dynamic & linear programming, graph algorithms, and search
              algorithms to solve advanced programming problems.
            </p>
            <p>Data Structures</p>
            <p className="ml-3 text-sm">
              Used Python to implement fundamental data structures and
              compression/sorting algorithms, including stack, list, queue,
              tree, BST, and Huffman encoding.
            </p>
          </div>
          <h1 className="text-green-800 text-3xl">Leadership Experience</h1>
          <div className="ml-3">
            <div className="flex justify-between">
              <p>
                Trip Lead & Gear Shed Manager - <em>Field Studies Club</em>
              </p>
              <p>January 2025 - Present</p>
            </div>
            <p className="ml-3 text-sm list-disc">
              Lead teams of 10-20 students on various outdoor excursions, such
              as wilderness backpacking and rock climbing. Employ and iterate
              upon complex trip planning workflows using Monday and other
              company management tools. Manage a public shared gear shed of over
              50 pieces of equipment, rigorously checking and maintaining the
              quality of each piece of gear to ensure club members without
              access to camping gear are still able to enjoy the outdoors.
            </p>
          </div>
          <h1 className="text-green-800 text-3xl">Skills</h1>
          <ul className="ml-6 text-xl list-disc">
            <li>
              Computer programming, React, HTML, CSS, Python, C/C++, Javascript,
              Java, Firebase, MongoDB, Figma, Monday.com, Slack
            </li>
            <li>Leadership, Communication, Problem Solving, Time Management</li>
            <li>
              Wilderness First Responder, Outdoorsmanship, Backpacking, Rock
              Climbing, Big Wall Climbing
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
