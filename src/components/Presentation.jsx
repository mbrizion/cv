const Presentation = () => {
  return (
    <section className="mb-8 rounded-xl bg-surface border border-border p-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 items-center">
        {/* Intro */}
        <div className="md:col-span-2">
          <h1 className="mb-2 text-2xl font-semibold">Hello, I’m John Doe</h1>
          <p className="text-text-secondary">
            Frontend developer focused on React, performance, and clean
            architecture.
          </p>
        </div>

        {/* Profile picture */}
        <div className="flex justify-center md:justify-end">
          <div className="h-28 w-28 rounded-full bg-accent/20 border border-accent flex items-center justify-center">
            <span className="text-sm text-accent">Photo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
