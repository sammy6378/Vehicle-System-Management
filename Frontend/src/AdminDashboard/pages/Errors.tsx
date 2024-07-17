

import { Link, useRouteError } from "react-router-dom";

import {ArrowLeft} from 'lucide-react'
import { useNavigate } from "react-router-dom";

function Errors() {
const error : unknown = useRouteError()
const navigate = useNavigate();

  return (
    <div className="py-10  bg:base-100">
    <div className="text-center">
        <p className="text-base font-semibold text-red-500">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-green-300 sm:text-5xl">
            Page not found
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-600">
            Sorry, we couldn &apos:t find the page you&apos;re looking for.
        </p>
        <p>
            {error?.statusText || error.message}
        </p>
        <div className="mt-4 flex items-center justify-center gap-x-3">
            <button onClick={()=> navigate(-1)} className="inline-flex items-center btn btn-sm btn-info text-sm font-semibold"><ArrowLeft size={16} className="mr-2" />Go back
            </button>
            <Link to="/admin" className="rounded-md btn btn-primary btn-sm  text-sm font-semibold"> Contact us
            </Link>
        </div>
    </div>
</div>
  )
}

export default Errors