import { useMutation, useQueryClient } from "@tanstack/react-query"
import { noticeDeleteApi } from "../api/boardApi";

export const NoticeDeleteMutation = () => {
    const queryClient = useQueryClient();
    return useMutation ({
        mutationFn: (postId) => noticeDeleteApi(postId),

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["noticeList"] });
        },

        onError: (error) => {
            console.error("공지 삭제 실패 : ", error);
        },
        
    });
}