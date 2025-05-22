import "../css/search.css"
import { useState} from "react"
import entana from "../database"

const SearchSection=()=>{
    const [openMore,setOpenMore]=useState(null)
    const [openPhoto,SetOpenPhoto]=useState(null)

    const [listOf,setListOf]=useState(entana)

    const [searchValue,setSearchValue]=useState("")

    const searchFunction=()=>{
      let tab=[]
          
      if (searchValue) {
        listOf.forEach((element,alpha) => {
           if (element.karazany.includes(searchValue)) {
               tab.push(element)
           }
        })

        setListOf(tab)

      } else {
        setListOf(entana)
      }

    }

    const getBySize=(a)=>{

          let tab1=[]

         entana.forEach((element,alpha) => {
              let k=element.taille.split("-").join("").toLocaleLowerCase()
               console.log("this is k",k);
               
              if (k.includes(a)) {
                tab1.push(element)
              }
         });
         setListOf(tab1)
    }

    const getByCategory=(b)=>{
      let tab2=[]

      entana.forEach(element => {
          if (element.karazany === b) {
            tab2.push(element)
          }
      })

      setListOf(tab2)
    }

    return(
        <section className="section-2" onClick={()=>{
            setOpenMore(null)
        }}>
           <div className="div-search">
             <i className="fas fa-search"></i>
             <input type="search" placeholder="article name ..." value={searchValue} onChange={
              (e)=>{
                  setSearchValue(e.target.value.trim())
                  searchFunction()
              }
             }/>
           </div>
           <div className="div-cathegory">
             <button onClick={()=>{
              setListOf(entana)
             }}>all</button> 
             <button onClick={()=>{getBySize("s")}}>s</button> 
             <button onClick={()=>{getBySize("m")}}>m</button>
             <button onClick={()=>{getBySize("l")}}>l</button> 
             <button onClick={()=>{getBySize("xl")}}>xL</button>
             <button onClick={(e)=>{
                e.stopPropagation()
                setOpenMore(true)
             }}>more</button>
           </div>
           <div className="div-more" style={ 
            openMore != null ? {
               right:"0"
            }:{
                right:"-60%"
            }
            }  onClick={(e)=>{
                 e.stopPropagation()
            }}>
                  <h6 onClick={()=>{getBySize("sm")}}>sm</h6>
                 <h6 onClick={()=>{getBySize("2xl")}}>2xl</h6>
                 <h6 onClick={()=>{getBySize("3xl")}}>3xl</h6>
                 <h6 onClick={()=>{getBySize("4xl")}}>4xl</h6>
                 <h6 onClick={()=>{getBySize("5xl")}}>5xl</h6>
                 <h6 onClick={()=>{getBySize("6xl")}}>6xl</h6>
                 <h6 onClick={()=>{getByCategory("soutien")}}>soutiens</h6>
                 <h6 onClick={()=>{getByCategory("ensemble")}}>ensembles</h6>
                 <h6 onClick={()=>{getByCategory("gaine")}}>gaines</h6>
                 <h6 onClick={()=>{getByCategory("accessoire")}}>accessoires</h6>
                 <h6 onClick={()=>{getByCategory("lingerie")}}>lingeries</h6>
           </div>
           <div className="mode-list">
              {
                listOf.map((element,alpha) => {
                  return(
                    <div className="content" key={alpha} onClick={()=>{SetOpenPhoto(alpha)}}>
                       <div className="photo-detail" style={openPhoto === alpha ? {
                              transition:"0.5s",
                             transform:"scale(1)rotateZ(360deg)"
                       }:{
                            transition:"0.25s",
                             transform:"scale(0)rotateZ(-360deg)"
                       }} onClick={(e)=>{e.stopPropagation()}}>
                            
                            <button onClick={(e)=>{
                              e.stopPropagation()
                              SetOpenPhoto(null)
                              }}>close</button>
                            <div className="div-img">
                              <img src={element.sary} alt="" />
                              <img src={element.sary1} alt="" />
                            </div>

                       </div>
                    <img src={element.sary} alt="" />
                      <h3>{element.karazany}</h3>
                       <div className="size">
                           <h5>size :</h5>
                           <h6>{element.taille}</h6>
                       </div>
                      <h2><i className="fas fa-money-bill"></i>{element.vidiny}</h2>
                    </div>
                  )
                })
              }
             
           </div>
        </section>
    )
}

export default SearchSection