import { useState, useEffect } from 'react';
import { useGetUsersQuery, useCreateProfileMutation } from '../../services/service';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/Store';
import { TUser } from '../../services/service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

type Profile = {
  user_id: number;
  bio: string;
  facebook: string;
  instagram: string;
  twitter: string;
  location: string;
  image: File | null;
};

const ProfileForm = () => {
  const { data: loggedUser, error, isLoading } = useGetUsersQuery();
  const [createProfile] = useCreateProfileMutation();

  const authState = useSelector((state: RootState) => state.auth);
  const user = authState.user as TUser | null;
  const { user_id: UId } = user as TUser;

  const [profile, setProfile] = useState<Profile>({
    user_id: UId,
    bio: '',
    facebook: '',
    instagram: '',
    twitter: '',
    location:'',
    image: null,
  });

  useEffect(() => {
    if (loggedUser) {
      const user = loggedUser.find((user) => user.user_id === UId);
      if (user) {
        setProfile((prevProfile) => ({
          ...prevProfile,
          bio: '',
          facebook: '',
          instagram: '',
          twitter: '',
          location:'',
          image: null,
        }));
      }
    }
  }, [loggedUser, UId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      image: e.target.files ? e.target.files[0] : null,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let imageUrl = '';
    if (profile.image) {
      const formData = new FormData();
      formData.append('file', profile.image);
      formData.append('cloud_name', import.meta.env.VITE_CLOUD_NAME);
      formData.append('upload_preset', import.meta.env.VITE_CLOUD_PRESET);

      try {
        const response = await axios.post('https://api.cloudinary.com/v1_1/ndekei/image/upload', formData);
        imageUrl = response.data.secure_url; // Get the URL of the uploaded image
      } catch (error) {
        toast.error('Image upload failed.');
        return;
      }
    }

    const profileData = {
      user_id: profile.user_id,
      bio: profile.bio,
      facebook: profile.facebook,
      instagram: profile.instagram,
      twitter: profile.twitter,
      location: profile.location,
      image: imageUrl, // Add the image URL to the profile data
    };

    try {
      if(!profile.image)
        toast('unable to find profile image')
      await createProfile(profileData).unwrap();
      toast.success('Profile saved successfully!');
    } catch (error) {
      toast.error('Failed to save profile.');
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading user data</div>;

  return (
    <div className="max-w-2xl mx-auto p-10 bg-slate-200 mt-5 rounded-lg">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-6">Create Profile</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4 col-span-1 md:col-span-2">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="bio">Bio</label>
          <textarea name="bio" value={profile.bio} onChange={handleChange} className="w-full p-2 rounded bg-white text-black border border-blue-500" />
        </div>
        <div className="mb-4 col-span-1 md:col-span-2">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="image">Upload Image</label>
          <input type="file" name="image" onChange={handleImageChange} className="w-full px-3 py-2 border rounded-lg bg-white" />
          {profile.image && <img src={URL.createObjectURL(profile.image)} alt="Profile" className="mt-4 rounded-full h-32 w-32 object-cover" />}
        </div>
        <div className="mb-4 col-span-1 md:col-span-2">
          <h1 className="font-bold mb-2">Social</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="facebook">Facebook</label>
              <input type="text" name="facebook" value={profile.facebook} onChange={handleChange} className="w-full p-2 rounded bg-white text-black border border-blue-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="instagram">Instagram</label>
              <input type="text" name="instagram" value={profile.instagram} onChange={handleChange} className="w-full p-2 rounded bg-white text-black border border-blue-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="twitter">Twitter</label>
              <input type="text" name="twitter" value={profile.twitter} onChange={handleChange} className="w-full p-2 rounded bg-white text-black border border-blue-500" />
            </div>
          </div>
          <div className="mb-4 col-span-1 md:col-span-2">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="location">Location (Google Map Embed URL)</label>
          <input type="text" name="location" value={profile.location} onChange={handleChange} className="w-full p-2 rounded bg-white text-black border border-blue-500" />
        </div>
        <div className="mb-4 col-span-1 md:col-span-2">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="map">Google Map</label>
          <iframe src={profile.location} width="100%" height="300" className="border rounded-lg bg-white" allowFullScreen loading="lazy"></iframe>
        </div>
        </div>
        <div className="col-span-1 md:col-span-2">
          <button type="submit" className="w-full bg-blue-500 text-white px-3 py-2 rounded-lg">Save Profile</button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
