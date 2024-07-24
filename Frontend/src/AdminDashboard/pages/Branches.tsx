import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { adminservices, TBranch } from "../service";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const Branches = () => {
  const { data: getBranches, isLoading, refetch } = adminservices.useGetBranchesQuery();
  const [createBranch] = adminservices.useCreateBranchesMutation();
  const [updateBranch] = adminservices.useUpdateBranchesMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const { register, handleSubmit, setValue, reset } = useForm<TBranch>();
  const { id } = useParams();

  const branch = getBranches?.find((b) => b.location_id === Number(id));

  useEffect(() => {
    if (branch) {
      setValue('name', branch.name);
      setValue('address', branch.address);
      setValue('contact_phone', branch.contact_phone);
    }
  }, [branch, setValue]);

  const onSubmit = async (data: TBranch) => {
    try {
      if (isEditMode) {
        await updateBranch(data).unwrap();
        toast.success('Branch data updated successfully!');
      } else {
        await createBranch(data);
        toast.success('Branch created successfully!');
      }
      reset();
      setIsModalOpen(false);
      refetch();
    } catch (error) {
      toast.error(isEditMode ? 'Failed to update branch details.' : 'Failed to create branch.');
    }
  };

  const openCreateModal = () => {
    reset();
    setIsEditMode(false);
    setIsModalOpen(true);
  };

  const openEditModal = (branch: TBranch) => {
    setValue('location_id', branch.location_id);
    setValue('name', branch.name);
    setValue('address', branch.address);
    setValue('contact_phone', branch.contact_phone);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  return (
    <div className="p-6 overflow-x-auto">
      <ToastContainer />
      <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={openCreateModal}>
        Add Branch
      </button>
      <table className="min-w-full table-auto border">
        <thead className="bg-base-300 text-left">
          <tr>
            <th className="py-2 px-4 border-b">Location_id</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">Contact_Phone</th>
            <th className="py-2 px-4 border-b">Edit Branch</th>
          </tr>
        </thead>
        {isLoading ? (
          <div className="flex justify-center py-2"><PulseLoader color="#19f519" /></div>
        ) : (
          <tbody>
            {getBranches?.map((branch) => (
              <tr key={branch.location_id} className="text-slate-300">
                <td className="py-2 px-4 border-b">{branch.location_id}</td>
                <td className="py-2 px-4 border-b">{branch.name}</td>
                <td className="py-2 px-4 border-b text-ellipsis overflow-hidden whitespace-nowrap">{branch.address}</td>
                <td className="py-2 px-4 border-b">{branch.contact_phone}</td>
                <td className="py-2 px-4 border-b">
                  <button className="text-blue-500 hover:underline" onClick={() => openEditModal(branch)}>
                    Edit Branch
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h2 className="text-xl mb-4">{isEditMode ? 'Edit Branch' : 'Add Branch'}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {isEditMode && (
                <input
                  type="hidden"
                  {...register('location_id')}
                />
              )}
              <div className="mb-4">
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  {...register('name', { required: true })}
                  className="w-full px-4 py-2 border border-gray-500 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Address</label>
                <input
                  type="text"
                  {...register('address', { required: true })}
                  className="w-full px-4 py-2 border border-gray-500 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Contact Phone</label>
                <input
                  type="text"
                  {...register('contact_phone', { required: true })}
                  className="w-full px-4 py-2 border border-gray-500 rounded-lg"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-4 px-4 py-2 bg-gray-500 text-white rounded"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  {isEditMode ? 'Update Branch' : 'Add Branch'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Branches;
