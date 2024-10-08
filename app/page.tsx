import { CiHome } from "react-icons/ci";

export default function Home() {
  return (
    <div className="">
      {/* start slide  */}
      <div className="fixed top-0 left-0 w-64 h-full bg-gray-900 p-4">
        <a href="" className="flex items-center pb-4 border-b-gray-800 ">
          <img
            src="/images/logo.png"
            alt=""
            className="w-8 h-8 rounded object-contain"
          />
          <span>Logo</span>
        </a>

        <ul className="mt-4">
          <li className="group active">
            <a
              href=""
              className="flex items-center py-2 px-4 gap-2 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white"
            >
              <CiHome className="mr-2 text-lg" />
              <span> DashBoeds</span>
            </a>
          </li>

          <li className="group ">
            <a
              href=""
              className="flex items-center py-2 px-4 gap-2 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 "
            >
              <CiHome className="mr-2 text-lg" />
              <span> Massage</span>
            </a>
          </li>

          <li className="group ">
            <a
              href=""
              className="flex items-center py-2 px-4 gap-2 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 "
            >
              <CiHome className="mr-2 text-lg" />
              <span> Massage</span>
            </a>
          </li>

          <li className="group ">
            <a
              href=""
              className="flex items-center py-2 px-4 gap-2 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 "
            >
              <CiHome className="mr-2 text-lg" />
              <span> Order</span>
            </a>
            <ul className="pl-4 mt-2">
              <li className="mb-3">
                <a
                  href=""
                  className="text-gray-300 text-sm flex items-center hover:text-white before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
                >
                  active order{" "}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
