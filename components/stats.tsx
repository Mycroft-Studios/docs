import * as React from "react"

import { Button } from "@/components/ui/button"

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link";

const GithubStats = () => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <Card className="mt-5">
                <CardHeader>
                    <CardTitle>Github Stats</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="columns-xs">
                        <div style={{width: "120%"}}>
                            <img src={"https://github-readme-stats.vercel.app/api?username=Mycroft-Studios&theme=dark&show_icons=true&hide_border=true&count_private=true"}/>
                        </div>
                        <div style={{width: "100%", marginLeft: "20%"}}>
                            <img src={"https://github-readme-stats.vercel.app/api/top-langs/?username=Mycroft-Studios&theme=dark&show_icons=true&hide_border=true&layout=compact"}/>
                        </div>
                    </div>

                </CardContent>
                <CardFooter>
                    <Button  variant="outline" asChild>
                        <Link href="https://github.com/Mycroft-Studios">View Profile</Link>
                    </Button>
                </CardFooter>
            </Card>
        </ThemeProvider>
    );
}

export default GithubStats;