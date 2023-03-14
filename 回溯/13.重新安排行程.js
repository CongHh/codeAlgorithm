/**
 * @param {string[][]} tickets
 * @return {string[]}
 * 给你一份航线列表 tickets ，其中 tickets[i] = [fromi, toi] 表示飞机出发和降落的机场地点。
 * 请你对该行程进行重新规划排序。
 * 所有这些机票都属于一个从 JFK（肯尼迪国际机场）出发的先生，所以该行程必须从 JFK 开始。
 * 如果存在多种有效的行程，请你按字典排序返回最小的行程组合。
 * 例如，行程 ["JFK", "LGA"] 与 ["JFK", "LGB"] 相比就更小，排序更靠前。
 * 假定所有机票至少存在一种合理的行程。且所有的机票 必须都用一次 且 只能用一次。
 */
const findItinerary = (tickets) => {
  const res = ['JFK']; // 初始放入起点'JFK'
  const map = {};      // 邻接表

  for (const ticket of tickets) { // 遍历tickets，建表
    const [from, to] = ticket;    // 每一张机票，读出起点和终点
    if (!map[from]) {
      map[from] = []; // 初始化
    }
    map[from].push(to); // 建立映射
  }

  for (const city in map) { // 按照字母顺序，小的在前
    map[city].sort();
  }

  const dfs = (city, used) => { // city是当前访问的城市、used是已用掉的机票数
    if (used == tickets.length) { // 用光了所有机票，路径找到了
      return true;
    };
    const nextCities = map[city]; // 获取下一站能去的城市list
    if (!nextCities || nextCities.length == 0) { // 没有邻接城市了
      return false; // 还没用光机票，就没有下一站了，返回false
    }
    for (let i = 0; i < nextCities.length; i++) { // 设置出各种选项（递归分支）
      const next = nextCities[i]; // 当前选择的下一站
      nextCities.splice(i, 1);    // 飞出地的list中删掉这一站
      res.push(next);             // 将该选择推入res
      if (dfs(next, used + 1)) {  // 在该递归分支中能找到一个用完所有机票的路径
        return true;
      } else {
        nextCities.splice(i, 0, next); // 将删掉的这一站重新插回去
        res.pop();                     // 推入res的选择，也撤销
      }
    }
  };

  dfs('JFK', 0); // 从'JFK'城市开始遍历，当前用掉0张机票
  return res;
};

let tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
findItinerary(tickets)
