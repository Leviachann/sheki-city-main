export interface MatchCardProps {
    liqaLogo: string;
    id: number | string;
    homeClubName: string;
    awayClubName:string;
    matchDate:string;
    kickOffTime:string;
    homeScore:number;
    awayScore:number;
    homeLogo:string;
    competitionLogoUrl:string;
    variant?: 'horizontal' | 'compact';
    onCtaClick?: () => void;
}