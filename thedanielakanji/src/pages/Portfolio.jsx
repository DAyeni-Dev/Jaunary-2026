import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#132347] sm:text-4xl">
            Proof of Work
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            A selection of projects that showcase impact and results.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -5 }}
              className="bg-white overflow-hidden shadow-lg rounded-lg border border-gray-100 flex flex-col h-full"
            >
              <div className="h-64 w-full relative">
                <img
                  className="w-full h-full object-cover"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute top-4 left-4 bg-[#FF9A4A] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                  {project.category}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-[#132347] mb-2">
                  {project.title}
                </h3>
                <div className="mb-4">
                  <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide">The Challenge</p>
                  <p className="text-gray-600 mt-1">{project.challenge}</p>
                </div>
                <div className="mb-6 flex-1">
                  <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide">The Result</p>
                  <p className="text-[#132347] font-medium mt-1">{project.result}</p>
                </div>
                {project.link && project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#FF9A4A] hover:text-[#e8893c] font-semibold transition-colors mt-auto"
                  >
                    View Project Details &rarr;
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
