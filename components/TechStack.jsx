import Image from "next/image";
import graphql from "@/assets/icons/grapql.svg";
import jest from "@/assets/icons/jest.svg";
import vitest from "@/assets/icons/vitest.svg";
import aws from "@/assets/icons/aws.svg";
import docker from "@/assets/icons/docker.svg";
import mongoose from "@/assets/icons/mongoose.svg";
import mongodb from "@/assets/icons/mongodb.svg";
import prisma from "@/assets/icons/prisma.svg";
import postgres from "@/assets/icons/postgras.svg";
import sql from "@/assets/icons/sql.svg";
import nextjs from "@/assets/icons/nextjs.svg";
import redux from "@/assets/icons/redux.svg";
import express from "@/assets/icons/express.svg";
import typescript from "@/assets/icons/ts.svg";
import javascript from "@/assets/icons/js.svg";

export const TechStack = () => {
  const technologies = [
    { name: "JavaScript", icon: javascript },
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
    <section className="py-5  sm:py-10 md:py-16  lg:py-24 px-2 md:px-4 overflow-hidden w-full  flex ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl  sm:text-3xl font-bold mb-8  text-center">
          Technology Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4   justify-center items-center">
          {technologies.map((tech, index) => (
            <div
              key={tech?.name + index}
              className=" bg-slate-950 text-white rounded-2xl"
            >
              <div className="flex items-center gap-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-[12px]   px-2 justify-center sm:px-5 py-3 hover:bg-white/20 transition-all duration-300  ">
                <div className="sm:w-5 sm:h-5 lg:w-7 lg:h-7 relative flex items-center justify-center">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={0}
                    height={0}
                    unoptimized
                    className={`"object-contain w-5 sm:w-10 md:w-20  rounded  lg:w-24 ${
                      tech.name == "MongoDB" &&
                      " w-10 h-7 sm:h-8 md:h-9  lg:h-10"
                    }`}
                  />
                </div>
                <p className="font-medium text-xs sm:text-sm lg:text-[15px]">
                  {tech.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
