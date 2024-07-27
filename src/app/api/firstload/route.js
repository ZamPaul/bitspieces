import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(){
    const Cookies = cookies()
    const firstload = Cookies.get("firstLoad")

    if( firstload ){
        Cookies.set('firstLoad', "true", { expires: 1 });
        return NextResponse.json(true);
    }
    return NextResponse.json(false);
}