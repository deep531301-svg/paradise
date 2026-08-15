/**
 * Reusable utility to calculate current showroom open/closed status in Ludhiana (Asia/Kolkata timezone)
 */
export const getLudhianaTime = () => {
  // Get individual datetime components specifically for Ludhiana (Asia/Kolkata Timezone)
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false
  });
  
  const parts = formatter.formatToParts(new Date());
  const dateObj = {};
  parts.forEach(p => {
    if (p.type !== "literal") {
      dateObj[p.type] = parseInt(p.value, 10);
    }
  });

  // Get week day in Ludhiana
  const dayFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    weekday: "long"
  });
  const weekday = dayFormatter.format(new Date());

  return {
    hour: dateObj.hour || 0,
    minute: dateObj.minute || 0,
    weekday
  };
};

export const getShowroomStatus = () => {
  const { hour, minute, weekday } = getLudhianaTime();
  
  // Showroom Hours:
  // Mon - Sat: 10:00 AM (10:00) to 8:30 PM (20:30)
  // Sunday: Closed
  const isOpenDay = weekday !== "Sunday";
  const openTime = 10 * 60; // 10:00 AM in minutes
  const closeTime = 20 * 60 + 30; // 8:30 PM in minutes (20:30)
  const currentTimeInMinutes = hour * 60 + minute;

  if (!isOpenDay) {
    return {
      isOpen: false,
      message: "Closed Now — Opens Monday at 10:00 AM",
      shortMessage: "Showroom Closed"
    };
  }

  if (currentTimeInMinutes >= openTime && currentTimeInMinutes < closeTime) {
    return {
      isOpen: true,
      message: "Open Now — Closes at 8:30 PM",
      shortMessage: "Showroom Open"
    };
  } else {
    // If closed but it's a showroom day (Mon-Sat)
    if (currentTimeInMinutes < openTime) {
      return {
        isOpen: false,
        message: "Closed Now — Opens today at 10:00 AM",
        shortMessage: "Showroom Closed"
      };
    } else {
      const nextOpenDay = weekday === "Saturday" ? "Monday" : "tomorrow";
      return {
        isOpen: false,
        message: `Closed Now — Opens ${nextOpenDay} at 10:00 AM`,
        shortMessage: "Showroom Closed"
      };
    }
  }
};
