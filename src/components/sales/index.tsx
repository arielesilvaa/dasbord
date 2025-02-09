import { CircleDollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

export function Sales() {
    return (
        <Card className="flex-1">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-800">
                        Útimos Clientes
                   </CardTitle>
                   <CircleDollarSign className="ml-auto w-4 h-4"/>
                </div>
                <CardDescription>
                Novos Clientes nas útimas 24 horas
             </CardDescription>
            </CardHeader>

            <CardContent>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/arielesilvaa.png"/>
                        <AvatarFallback>AS</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Desenvolvedora Frontend</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">Ariele.front@gmail.com</span>
                    </div>
                </article>

                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/arielesilvaa.png"/>
                        <AvatarFallback>AS</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Desenvolvedora Frontend</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">Ariele.front@gmail.com</span>
                    </div>
                </article>

                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/arielesilvaa.png"/>
                        <AvatarFallback>AS</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Desenvolvedora Frontend</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">Ariele.front@gmail.com</span>
                    </div>
                </article>



            </CardContent>
        </Card>
    );
}