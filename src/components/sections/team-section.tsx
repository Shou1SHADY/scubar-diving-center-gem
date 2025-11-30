import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { teamMembers } from "@/lib/site-config";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";

interface TeamSectionProps {
    isHomePage?: boolean;
}

export default function TeamSection({ isHomePage = false }: TeamSectionProps) {
    const membersToDisplay = isHomePage ? teamMembers.slice(0, 2) : teamMembers;

    return (
        <section className="py-12 md:py-24 lg:py-32">
            <div className="container">
                <div className="text-center space-y-3 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Meet Our Expert Team
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                        Passionate, experienced, and dedicated to making your dive unforgettable.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {membersToDisplay.map((member, index) => {
                        const memberImage = PlaceHolderImages.find(img => img.id === member.image);
                        return (
                            <Card key={index} className="text-center border-0 shadow-none bg-transparent">
                                <CardHeader className="items-center">
                                    <Avatar className="h-32 w-32">
                                        {memberImage && <AvatarImage src={memberImage.imageUrl} alt={member.name} data-ai-hint={memberImage.imageHint} />}
                                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                </CardHeader>
                                <CardContent>
                                    <CardTitle>{member.name}</CardTitle>
                                    <p className="text-primary font-semibold mt-1">{member.role}</p>
                                    <p className="text-muted-foreground mt-2 text-sm">{member.bio}</p>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
                {isHomePage && (
                     <div className="text-center mt-12">
                        <Button asChild size="lg">
                            <Link href="/team">Meet The Whole Crew</Link>
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}