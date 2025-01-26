

// export async function generateStaticParams() {
//     const posts = await fetch('https://.../posts').then((res) => res.json())
//
//     return posts.map((post) => ({
//         slug: post.slug,
//     }))
// }

export function generateStaticParams() {
    return Promise.resolve([{ id: '1' }, { id: '2' }, { id: '3' }]);
}

export default async function makeIdPage({params}: {
    params: Promise<{ id: string }>
}) {
    const {id} = await params


    function logMe (str: string){
        console.log(str)
        return (
            <p></p>
        )
    }
    console.log(id)
    return (
        <div>
            <h1>Result Page: {id}</h1>
            <p>
                makeId Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
                aut consequatur cupiditate natus necessitatibus non repudiandae tenetur
                unde. Molestiae numquam perferendis qui tenetur ullam! Aliquam, aut autem
                consequuntur cumque dicta dolores ducimus eius, eligendi esse eveniet
                exercitationem harum iusto labore libero magnam molestiae nam nihil
                obcaecati quasi qui reiciendis similique sit soluta sunt, tenetur
                veritatis vitae voluptatibus. Debitis dolores minima molestias, natus
                nesciunt repudiandae voluptates. Ab esse eum quis tempora? Ad amet animi
                beatae blanditiis debitis deleniti ducimus enim id inventore ipsa ipsam
                labore laboriosam maiores minima modi nesciunt porro possimus, quae quia
                sint sunt tempora vitae voluptatum? Doloribus, fuga.
            </p>
        </div>

    );
}

