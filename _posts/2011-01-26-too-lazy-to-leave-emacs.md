---
layout: post
title: Too lazy to leave Emacs, playing or queing with mpd/mpc
---
One of the great things about Emacs is that it can do damn near anything you feel like doing, which enhances your lazy a great deal.  I often find myself wanting to play an album or queue one up and I don't want to jump all over the place to do it.  I also love the hell out of [ido](http://www.emacswiki.org/emacs/InteractivelyDoThings), and so I wrote the following to quickly play or queue files with [mpd](http://mpd.wikia.com/wiki/Music_Player_Daemon_Wiki) through [mpc](http://mpd.wikia.com/wiki/MPC) commands.

{% highlight cl%}
(defvar mpd-default-music-dir "/home/atom/music/" "mpd music dir, full path, none of that ~/ junk.")

(defun mpc-find-dir (dir)
  "Finds a directory for mpd playing or queueing"
  (interactive "D")
  (replace-regexp-in-string
   mpd-default-music-dir "" (substring
                           dir 0 -1)))

(defun mpc-play-or-queue-dir (&optional clear-and-play)
  "Plays or queues a directory with mpd"
  (interactive)
  (let ((default-directory mpd-default-music-dir)
        (cmd "mpc add '%s';"))
    (if clear-and-play
        (setq cmd (concat "mpc clear;" cmd "mpc play;")))
    (shell-command (format cmd (call-interactively 'mpc-find-dir)))))

(defun mpc-play-dir ()
  (interactive)
  (mpc-play-or-queue-dir t))

(defun mpc-queue-dir ()
  (interactive)
  (mpc-play-or-queue-dir))

(defun mpc-clear-playlist ()
  (interactive)
  (shell-command "mpc clear"))
{% endhighlight %}

I am new to LISP, so feel free to tell me how to do it better, I promise I will not take offense.