import { useState, useEffect } from 'react';
import { useGetUsersQuery,useCreateProfileMutation } from '../../services/service';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/Store';
import { TUser } from '../../services/service';

type Profile = {
  name: string;
  username: string;
  bio: string;
  phone: string;
  email: string;
  address: string;
  location: string;
  facebook: string;
  instagram: string;
  twitter: string;
  image: string | null;
}

const ProfileForm = () => {
  const { data: loggedUser, error, isLoading } = useGetUsersQuery();
  const [createProfile] = useCreateProfileMutation()

  const {user} = useSelector((state: RootState) => state.auth.user);
      const {user_id} = user as TUser;

  const [profile, setProfile] = useState<Profile>({
    name: '',
    username: '',
    bio: '',
    phone: '',
    email: '',
    address: '',
    location: '',
    facebook: '',
    instagram: '',
    twitter: '',
    image: null,
  });

  useEffect(() => {
    loggedUser?.map((user) => {
    if (user && user.user_id === user_id) {
      setProfile({
        name: user.full_name,
        username: user.user_name,
        bio: '',
        phone: user.contact_phone,
        email: user.email,
        address: user.address,
        location: '',
        facebook: '',
        instagram: '',
        twitter: '',
        image: null,
      });
    }
  });
  }, [user]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleImageChange = (e: any) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      image: URL.createObjectURL(e.target.files[0]),
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const profileToSubmit = {
      location: profile.location,
      facebook: profile.facebook,
      instagram: profile.instagram,
      twitter: profile.twitter,
      image: profile.image,
    };
    await createProfile(profileToSubmit).unwrap();
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading user data</div>;

  return (
    <div className="w-full mx-auto p-10 bg-slate-200">
      <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
          <input type="text" name="name" value={profile.name} onChange={handleChange} className="w-full p-2 rounded bg-white text-black border border-blue-500" disabled />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="username">Username</label>
          <input type="text" name="username" value={profile.username} onChange={handleChange} className="w-full p-2 rounded bg-white text-black border border-blue-500" disabled />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="bio">Bio</label>
          <textarea name="bio" value={profile.bio} onChange={handleChange} className="w-full p-2 rounded bg-white text-black border border-blue-500"/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">Phone</label>
          <input type="text" name="phone" value={profile.phone} onChange={handleChange} className="w-full p-2 rounded bg-white text-black border border-blue-500" disabled />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
          <input type="email" name="email" value={profile.email} onChange={handleChange} className="w-full p-2 rounded bg-white text-black border border-blue-500" disabled />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="address">Address</label>
          <input type="text" name="address" value={profile.address} onChange={handleChange} className="w-full p-2 rounded bg-white text-black border border-blue-500" disabled />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="image">Upload Image</label>
          <input type="file" name="image" onChange={handleImageChange} className="w-full px-3 py-2 border rounded-lg bg-white" />
          {profile.image && <img src={profile.image} alt="Profile" className="mt-4 rounded-full h-32 w-32 object-cover" />}
        </div>
        <div className="flex flex-col">
          <h1>Social</h1>
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
        <div className="flex flex-col">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="location">Location (Google Map Embed URL)</label>
            <input type="text" name="location" value={profile.location} onChange={handleChange} className="w-full p-2 rounded bg-white text-black border border-blue-500" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="map">Google Map</label>
            <iframe src={profile.location} width="100%" height="300" className="border rounded-lg bg-white" allowFullScreen loading="lazy"></iframe>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white px-3 py-2 rounded-lg">Save Profile</button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
