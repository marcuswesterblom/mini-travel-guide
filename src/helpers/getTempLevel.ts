import type { TempLevel } from "./activityData";

export function getTempLevel(temp: number): TempLevel {
    if ( temp<= 0) return "freezing";
    if ( temp<= 5) return "cold";
    if ( temp<= 10) return "chilly";
    if ( temp<= 15) return "mild";
    if ( temp<= 20) return "warm";
    if ( temp<= 25) return "hot";
    return "veryHot";
}