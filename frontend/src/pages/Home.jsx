const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center h-[80vh] bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Shenal Manelka</h1>
      <p className="text-xl mb-6">A passionate software engineer & web developer</p>
      <a href="/projects" className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
        View My Work
      </a>
    </section>
  );
};

export default Home;
