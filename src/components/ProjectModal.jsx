export default function ProjectModal({ project, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 max-w-3xl w-full rounded-xl p-6 relative"
        onClick={e => e.stopPropagation()}
      >

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover rounded mb-5"
        />

        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 bg-purple-600/20 text-purple-300 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        <p className="text-gray-300 whitespace-pre-line leading-relaxed mb-6">
          {project.full}
        </p>

        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            className="inline-block px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition text-white font-semibold"
          >
            View on GitHub →
          </a>
          {project.pypi && (
            <a
              href={project.pypi}
              target="_blank"
              className="inline-block px-6 py-3 bg-yellow-500 rounded-lg hover:bg-yellow-600 transition text-white font-semibold"
            >
              View on PyPI →
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              className="inline-block px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700 transition text-white font-semibold"
            >
              View Live →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
