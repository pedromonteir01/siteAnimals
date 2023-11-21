import axios from "axios";
import { 
    NextResponse,
    NextRequest
} from "next/server";


export const GET = async() => {

    try {
      const response = await axios.get("http://localhost:4000/animals");
      console.log("response.data:", response.data.animals);
  
      return NextResponse.json(response.data.animals);
    } catch (error) {
      console.log("[ORDER_GET]", error);
      return new NextResponse("Erro interno do servidor!", { status: 500 });
    }
  }