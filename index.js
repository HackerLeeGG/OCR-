// 假设从 OCR 中提取的时间
const startTime = "09:15"; // 开始时间
const endTime = "17:45"; // 结束时间

function calculateTimeDifference(start, end) {
    // 将时间转换为 Date 对象
    const [startHours, startMinutes] = start.split(":").map(Number);
    const [endHours, endMinutes] = end.split(":").map(Number);

    // 创建日期对象
    const startDate = new Date(0, 0, 0, startHours, startMinutes);
    const endDate = new Date(0, 0, 0, endHours, endMinutes);

    // 计算时间差（毫秒）
    let diffMs = endDate - startDate;

    // 如果结束时间小于开始时间（跨天情况）
    if (diffMs < 0) {
        diffMs += 24 * 60 * 60 * 1000; // 加上一天的毫秒数
    }

    // 转换为小时和分钟
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    return `${diffHours}小时${diffMinutes}分钟`;
}

// 调用函数并输出结果
const timeDifference = calculateTimeDifference(startTime, endTime);
console.log(`时间间隔是：${timeDifference}`);

