const data = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
];

const timeButtons = document.querySelectorAll('.time-filter');

function updateTimeframe(timeframe) {
    data.forEach(activity => {
        const title = activity.title.toLowerCase().replace(' ', '-');
        const timeframeData = activity.timeframes[timeframe];
        if (!timeframeData) return;

        const currentHours = timeframeData.current;
        const previousHours = timeframeData.previous;

        const currentElement = document.getElementById(`${title}-current`);
        const previousElement = document.getElementById(`${title}-prev`);

        let previousLabel = '';
        if (timeframe === 'daily') {
            previousLabel = 'Yesterday';
        } else if (timeframe === 'weekly') {
            previousLabel = 'Last Week';
        } else if (timeframe === 'monthly') {
            previousLabel = 'Last Month';
        }
        
        if (currentElement) currentElement.textContent = `${currentHours}hrs`;
        if (previousElement) previousElement.textContent = `${previousLabel} - ${previousHours}hrs`;
    });
}

timeButtons.forEach(button => {
    button.addEventListener('click', () => {
        timeButtons.forEach(btn => {
          btn.classList.remove('active');
          btn.setAttribute('aria-pressed', 'false');
        });
        button.classList.add('active');
        button.setAttribute('aria-pressed', 'true');
        
        const clickOption = button.innerText.toLowerCase();
        updateTimeframe(clickOption);
    });
});

// Initialize with weekly data
updateTimeframe('weekly');
        