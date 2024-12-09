import comment from "../../data/comments";
export async function GET(_request, { params }) {
	const comentId = params.id;
	const commentss = comment.find((com) => com.id === parseInt(comentId));
	return Response.json(commentss);
}
export async function PATCH(request, { params }) {
	const comm = await request.json();
	const comentId = params.id;
	const commentsIndex = comment.findIndex(
		(com) => com.id === parseInt(comentId)
	);
	comment[commentsIndex].text = comm.text;
	return Response.json(comment[commentsIndex]);
}
export async function DELETE(request, { params }) {
	const comentId = params.id;
	const commentsIndex = comment.findIndex(
		(com) => com.id === parseInt(comentId)
	);
	const commentDel = comment[commentsIndex];

	comment.splice(commentsIndex, 1);
	return new Response(JSON.stringify({ message: "Comment deleted" }), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
}
