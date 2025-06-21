export default function ContactReady() {
  return (
    <>
      <div className="titles">
        <h1 className="text-white font-bold text-4xl">Let's make something amazing together</h1>
        <p className="text-white/[.60] mt-2">
          Dimulai dengan bilang <span className="font-semibold">Hallo!</span>
        </p>
      </div>
      <form action="" className="space-y-4">
        <div className="boxInput">
          <input type="text" id="username-success" className="bg-green-50 border placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 " placeholder="Nama" />
        </div>
        <div className="boxInput">
          <input type="email" id="username-success" className="bg-green-50 border placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 " placeholder="Email" />
        </div>
        <div className="boxInput">
          <input type="text" id="username-success" className="bg-green-50 border placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 " placeholder="Tipe Project" />
        </div>
        <div className="boxInput">
          <textarea
            id="message"
            rows={5}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
      </form>
    </>
  );
}
