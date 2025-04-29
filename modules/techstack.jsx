import Image from "next/image";
import graphql from "@/public/assets/grapql.svg";
import jest from "@/public/assets/jest.svg";
import vitest from "@/public/assets/vitest.svg";
import aws from "@/public/assets/aws.svg";
import docker from "@/public/assets/docker.svg";
import mongoose from "@/public/assets/mongoose.svg";
import mongodb from "@/public/assets/mongodb.svg";
import prisma from "@/public/assets/prisma.svg";
import postgres from "@/public/assets/postgras.svg";
import sql from "@/public/assets/sql.svg";
import nextjs from "@/public/assets/nextjs.svg";
import redux from "@/public/assets/redux.svg";
import express from "@/public/assets/express.svg";
import typescript from "@/public/assets/ts.svg";


export default function Techstack(){
    const technologies = [
        { name: "TypeScript", icon: typescript },
        { name: "Express", icon: express },
        { name: "Redux", icon: redux },
        { name: "Next.js", icon: nextjs },
        { name: "SQL", icon: sql },
        { name: "PostgreSQL", icon: postgres },
        { name: "Prisma", icon: prisma },
        { name: "MongoDB", icon: mongodb },
        { name: "Mongoose", icon: mongoose },
        { name: "Docker", icon: docker },
        { name: "AWS", icon: aws },
        { name: "Vitest", icon: vitest },
        { name: "Jest", icon: jest },
        { name: "GraphQL", icon: graphql },
      ];
    return (
        <>
              {/* Technology Stack Section */}
      <section className="  py-5  md:py-10  lg:py-16   px-2 md:px-4 overflow-hidden  flex ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8  text-center">
            Technology Stack
          </h2>
          <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4   justify-center items-center">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-[12px]  px-5 py-3 hover:bg-white/20 transition-all duration-300  "
              >
                <div className="   w-5 h-5 lg:w-7 lg:h-7 relative flex items-center justify-center">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={24}
                    height={24}
                    className="object-contain w-5 sm:w-10 md:w-20   lg:w-24"
                  />
                </div>
                <span className=" font-medium     text-xs sm:text-sm lg:text-[15px]">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
        </>
    );
}