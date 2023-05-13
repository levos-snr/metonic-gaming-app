import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Africa's Gateway To
        <br className="max-mid:hidden"/>
       
        <span className="orange_gradient text-center">
            The Metaverse, GameFT & nftS 
            </span>
        </h1>
        <p className="desc text-center">
        Our mission is to provide Africa with access to the latest
        technologies and opportunities in the gaming industry and 
        help them become part of the global gaming community.
            </p>

            <Feed/>

    </section>
  )
}

export default Home