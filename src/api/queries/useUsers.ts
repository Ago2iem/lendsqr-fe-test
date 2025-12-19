import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useFetch } from "../../hooks/useFetch";
import { User } from "../../types/users";
import { useParams } from "react-router-dom";


export function useGetAllUsers() {
    const { request } = useFetch()
    return useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await request(``)
            console.log('res from q', res)
            return res
        },
        staleTime: 5 * 60 * 1000,
        // retry: 2 // retry failed requests twice
    });
}

export function useGetUserById() {
    const { id } = useParams<{ id: string }>();
    const { request } = useFetch()

    return useQuery({
        queryKey: ['users', id],
        queryFn: async () => {
            const res = await request(``)
            console.log('res from user q', res)
            const user: User = res.find((u: User) => u.id === id);
            return user
        },
        staleTime: 5 * 60 * 1000,
    });

}