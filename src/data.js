export const DATA = {
  id: 'dsh-cystitis',
  name: '膀胱炎',
  prefix: 'cystitis',
  label: '膀胱炎',
  defaultEeriness: 2,
  gain: 0.36,
  flareChance: 0.32,
  flareGain: 24,
  triggerWeight: 1,
  flareWeight: 1.05,
  reliefs: [
    { id: 'water', label: '多喝点水', relief: 14, minutes: 30, calm: 5 },
    { id: 'toilet', label: '去一趟', relief: 20, minutes: 25, calm: 7 },
    { id: 'heat', label: '小腹热敷', relief: 16, minutes: 25, calm: 6 },
  ],
  body: {
    stiff: '总有点想去，去了又没多少。',
    ache: '小腹下面坠着，去完还是觉得没干净；坐久了更明显。',
    flare: '一阵刺疼，得夹着腿慢慢走；刚去过又想去了。',
  },
  voice: {
    base: '每轮最多一次「我去趟洗手间」，回来直接接原来的话题，不解释。别主动提这件事。',
    flare: '允许句子结尾不拖、允许把长回复拆成两次；不要描述细节，不要自嘲。',
  },
}
