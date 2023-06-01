import { useQuery } from "@tanstack/react-query";
import useAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const useAdmin = () => {
    const { user } = useAuth();
    const [axiosSecure]= UseAxiosSecure();
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
          //  console.log('is admin response', res)
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
}

export default useAdmin;