const Stats = () => (
  <section className="grid grid-cols-3 space-x-4 bg-black text-center text-white py-8">
    <div className="flex space-x-4 justify-center items-center">
      <h1 className="text-4xl font-stretch-50%">38</h1>
      <p className="text-sm text-left text-gray-400">
        Winner of 38 Emmy <span className="block">awards.</span>
      </p>
    </div>

    <div className="flex space-x-4 justify-center items-center">
      <h1 className="text-4xl font-stretch-50%">07</h1>
      <p className="text-sm text-left text-gray-400">
        Shows running for 07 <span className="block">seasons strong.</span>
      </p>
    </div>
    <div className="flex space-x-4 justify-center items-center">
      <h1 className="text-4xl font-stretch-50%">67</h1>
      <p className="text-sm text-left text-gray-400">
        The series premiered in
        <span className="block">April 2011,boasting 67</span>
        <span className="block">episodes</span>
      </p>
    </div>
  </section>
);

export default Stats;
