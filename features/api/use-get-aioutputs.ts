import { TEMPLATELIST } from "@/app/(data)/templates";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams } from "next/navigation";

export const useGetAiOutputs = () => {

    const params = useSearchParams();
    const from = params.get("from") || "";
    const to = params.get("to") || "";
    const accountId = params.get("accountId") || "";

    const query = useQuery({
        queryKey: ['summary', { from, to, accountId }],
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