const Quiz=()=>{
    const quizJson=[
        {
            id:1,
            title:"GRE Style Quiz – Reading Comprehension Part 4",
        },
        {
            id:2,
            title:"GRE Style Quiz – Reading Comprehension Part 3",
        },
        {
            id:3,
            title:"GRE Style Quiz – Reading Comprehension Part 2",
        },
        {
            id:4,
            title:"Basic Quiz – Text Completion",
        },
        {
            id:5,
            title:"Basic Quiz – Sentence Equivalence",
        },
        {
            id:6,
            title:"Basic Quiz – Reading Comprehension",
        },
        {
            id:7,
            title:"Basic Quiz – Permutations & Combinations",
        },
        {
            id:8,
            title:"Basic Quiz – Word Problems",
        },
        {
            id:9,
            title:"Basic Quiz – Algebra",
        },
        {
            id:10,
            title:"Basic Quiz – Arithmetic",
        },
        {
            id:11,
            title:"Basic Quiz – Geometry",
        },
        {
            id:12,
            title:"AdmitEDGE Verbal Quiz – Reading Comprehension",
        },
    ]
    return(

            <div className="bg-white shadow-md grid gap-y-8 px-5 py-7 mt-9">
            {
                quizJson.map(data=>
                    <div className="flex justify-between shadow-sm px-3 py-6 cursor-pointer" key={data.id}>
                        <h1 className="text-2xl text-gray-950">{data.title}</h1>
                        <button className="btn bg-white w-[246px] h-[48px] hover:bg-[#ED1C20] border-[2px] text-[#ED1C20] hover:text-white border-[#ED1C20] rounded-none hover:border-[#ED1C20]">take the test</button>
                    </div>
                    )
                }
                </div> 
    )
}

export default Quiz;