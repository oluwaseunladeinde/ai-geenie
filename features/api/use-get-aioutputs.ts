import { TEMPLATELIST } from "@/app/(data)/templates";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams } from "next/navigation";

export const useGetAiOutputs = () => {

    const params = useSearchParams();
    const query = useQuery({
        queryKey: ['aioutput'],
        queryFn: async () => {
            const response = await axios.get('/api/getAIOutput');
            if (response.status !== 200) {
                throw new Error("Failed to retrieve aioutputs");
            }
            const { data } = await response.data;
            return data;
        }
    });
    return query;
}