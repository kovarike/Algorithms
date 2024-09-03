
import { HTMLAttributes } from "react";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> { }

export function Text(props: TextProps) {
  return (
    <>
      <div
        className="text-slate-800 font-algorithms-font font-medium text-lg break-words"
        {...props}
      >
        <h3 className=" my-1 text-xl font-semibold font-algorithms-font">
          About Me
        </h3>
        <br />
        Hello! My name is Danilo and I am a Computer Engineering student, with a
        strong focus on software development and a passion for technology.
        Throughout my academic and professional career, I have worked with a
        variety of tools and technologies, including C, React, Next.js,
        TypeScript, Nest.js, Node.js and PostgreSQL.
        <h3 className=" my-1 text-xl font-semibold font-algorithms-font">
          <br />
          Skills
        </h3>
        <br />
        I have developed solid skills in programming with C and in web
        development using JavaScript, Node.js and TypeScript. I frequently work
        with frameworks such as React, Next.js, Vite.js, among others to create
        dynamic and responsive user interfaces. I use Fastify, Express and
        Nest.js to build robust and scalable applications, and I have experience
        integrating services with Node.js to create efficient solutions.
        Additionally, my familiarity with PostgreSQL allows me to efficiently
        manage and optimize relational databases.
        <br />
        <br />I am currently studying how to integrate applications with cloud
        services to improve the scalability and flexibility of projects.
        <h3 className=" my-1 text-xl font-semibold font-algorithms-font">
          <br />
          My Difference{" "}
        </h3>
        <br />
        What sets me apart is my passion for solving complex problems and my
        dedication to delivering high-quality solutions. I believe that
        collaboration is fundamental to the success of any project, and I am
        always open to new ideas and approaches. With a commitment to excellence
        and a results-oriented mindset, I am prepared to face challenges and
        contribute significantly to the success of my clients and projects.
        <h3 className=" my-1 text-xl font-semibold font-algorithms-font">
          <br />
          Objective
        </h3>
        <br />
        My main objective is the development of innovative and efficient
        applications. I'm always looking for opportunities to improve my skills
        and contribute to challenging projects, especially those that involve
        integration with cloud services and emerging technologies.
        <h3 className=" my-1 text-xl font-semibold font-algorithms-font">
          <br />
          Let's talk
        </h3>
        <br />
        If you're interested in discussing a potential collaboration or want to
        know more about my work, I'm happy to chat. Let's connect and explore
        how we can work together to create amazing solutions!
      </div>
    </>
  );
}
